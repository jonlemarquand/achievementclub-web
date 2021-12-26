<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGamesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('games', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->unsignedBigInteger('publisher_id');
            $table->unsignedBigInteger('developer_id');
            $table->string('cover_image');
            $table->bigInteger('overall_gamerscore');
            $table->dateTime('release_date_jp')->nullable();
            $table->dateTime('release_date_eu')->nullable();
            $table->dateTime('release_date_us')->nullable();
            $table->dateTime('release_date_global')->nullable();
            $table->timestamps();

            $table->foreign('publisher_id')->references('id')->on('publishers');
            $table->foreign('developer_id')->references('id')->on('developers');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('games');
    }
}
