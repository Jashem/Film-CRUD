<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        factory(App\User::class, 1)->create()->each(function ($user) {

            $films = factory(App\Film::class, 6)->make();
            $user->films()->saveMany($films);

            foreach ($films as $film) {
                $comment = factory(App\Comment::class)->make();
                $comment['user_id'] = $user['id'];
                $film->comments()->save($comment);
            }
        });
    }
}
