<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Film extends Model
{
    protected $fillable = [
        'name', 'description', 'release', 'date', 'rating', 'ticket', 'price', 'country', 'genre', 'photo', 'user_id',
    ];

    public function setDateAttribute($value)
    {
        $this->attributes['date'] = Carbon::parse($value);
    }

    public function comments()
    {
        return $this->hasMany('App\Comment')->orderBy('updated_at', 'desc');
    }
}
