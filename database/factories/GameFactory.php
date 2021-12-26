<?php

namespace Database\Factories;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

class GameFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->colorName(),
            'cover_image' => $this->faker->image(null,400, 400),
            'publisher_id' => rand(1, 10),
            'developer_id' => rand(1, 10),
            'overall_gamerscore' => '1000',
            'release_date_jp' => Carbon::createFromTimeStamp($this->faker->dateTimeBetween('now', '+2 days')->getTimestamp()),
            'release_date_global' => Carbon::createFromTimeStamp($this->faker->dateTimeBetween('now', '+7 days')->getTimestamp()),
        ];
    }
}
