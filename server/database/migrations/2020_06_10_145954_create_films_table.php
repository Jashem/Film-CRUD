<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFilmsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('films', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id')->index()->unsigned()->nullable();
            $table->string('name')->unique();
            $table->string('description');
            $table->boolean('release');
            $table->date('date');
            $table->integer('rating');
            $table->string('ticket');
            $table->double('price');
            $table->string('country');
            $table->string('genre');
            $table->string('photo');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('films');
    }
}
