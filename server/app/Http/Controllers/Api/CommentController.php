<?php

namespace App\Http\Controllers\Api;

use App\Comment;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{
    /**
     * store
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $id)
    {
        $validatedData = $request->validate([
            'comment' => 'required',
            'name' => 'required',
        ]);
        $input = $request->all();
        $input['user_id'] = Auth::user()->id;
        $input['film_id'] = (int) $id;
        $comment = Comment::create($input);
        return response()->json(["success" => $comment], 201);
    }
}
