<?php

namespace Database\Seeders;

use App\Models\Game;
use App\Models\GameUser;
use App\Models\User;
use Illuminate\Database\Seeder;

class GameUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = User::all();
        $games = Game::all();

        foreach ($users as $user) {
            foreach ($games as $game) {
                GameUser::create([
                    'game_id' => $game->id,
                    'user_id' => $user->id,
                ]);
            }
        }
    }
}
