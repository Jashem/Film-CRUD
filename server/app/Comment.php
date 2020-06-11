<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $fillable = ['name', 'comment', 'user_id', 'film_id'];

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
