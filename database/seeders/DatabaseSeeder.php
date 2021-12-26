<?php

namespace Database\Seeders;

use App\Models\Achievement;
use App\Models\Developer;
use App\Models\Game;
use App\Models\Publisher;
use App\Models\User;
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
        User::factory(10)->create();
        Developer::factory(10)->create();
        Publisher::factory(10)->create();
        Game::factory(10)->create();
        Achievement::factory(100)->create();

        $this->call([
            GameUserSeeder::class,
            AchievementUserSeeder::class,
        ]);
    }
}
