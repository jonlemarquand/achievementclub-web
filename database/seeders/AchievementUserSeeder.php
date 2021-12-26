<?php

namespace Database\Seeders;

use App\Models\Achievement;
use App\Models\AchievementUser;
use App\Models\User;
use Illuminate\Database\Seeder;

class AchievementUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = User::all();
        $achievements = Achievement::all();

        foreach ($users as $user) {
            foreach ($achievements as $achievement) {
                $num = rand(0, 1);
                if($num) {
                    AchievementUser::create([
                        'user_id' => $user->id,
                        'achievement_id' => $achievement->id
                    ]);
                }
            }
        }

    }
}
