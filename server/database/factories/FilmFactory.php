<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Film;
use Faker\Generator as Faker;

$factory->define(Film::class, function (Faker $faker) {
    return [
        'name' => $faker->name(),
        'description' => $faker->text(200),
        'release' => $faker->boolean(50),
        'date' => $faker->date('Y-m-d', 'now'),
        'rating' => 5,
        'ticket' => 'available',
        'price' => 100,
        'country' => 'USA',
        'genre' => 'Drama',
        'photo' => 'taxidriver.jpg',
        'user_id' => 1,
    ]
    ;
});
