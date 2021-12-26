<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class AchievementFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => ucwords($this->faker->word() . ' ' . $this->faker->word()),
            'gamerscore' => rand(10, 100),
            'game_id' => rand(1,10),
            'image' => $this->faker->image(null, 400, 400)
        ];
    }
}
