<?php

namespace App\Http\Controllers\Api;

use App\Film;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FilmController extends Controller
{
    /**
     * getFilms
     *
     * @return \Illuminate\Http\Response
     */

    public function getFilms()
    {
        $films = Film::paginate(3);
        return response()->json(["success" => $films], 200);
    }

    /**
     * getFilmByName
     *
     * @return \Illuminate\Http\Response
     */

    public function getFilmByName($name)
    {
        $film = Film::where('name', "=", $name)->first();
        return response()->json(["success" => $film], 200);
    }

    /**
     * store
     *
     * @return \Illuminate\Http\Response
     */

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|unique:films',
            'description' => 'required',
            'release' => 'required|boolean',
            'date' => 'required|date',
            'rating' => 'required|integer|min:1|max:5',
            'ticket' => 'required',
            'price' => 'required|numeric',
            'country' => 'required',
            'genre' => 'required',
            'photo' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);
        $input = $request->all();
        $fname = time() . $request->photo->getClientOriginalName();
        $request->file('photo')->storeAs('public/images', $fname);
        $input['user_id'] = Auth::user()->id;
        $input['photo'] = $fname;
        $film = Film::create($input);
        return response()->json(["success" => $film], 201);
    }

    /**
     * getImage
     *
     * @return \Illuminate\Http\Response
     */

    public function getImage($fileName)
    {
        $path = storage_path('app/public/images/' . $fileName);
        return response()->file($path);
    }

}
