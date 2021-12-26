<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreGameRequest;
use App\Http\Requests\UpdateGameRequest;
use App\Models\Game;
use Inertia\Inertia;

class GameController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreGameRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreGameRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Game  $game
     * @return \Inertia\Response
     */
    public function show($name)
    {

        $game = Game::where('name', $name)->firstOrFail();

        return Inertia::render('Game', [
            'game' => $game->only('id', 'name', 'publisher', 'developer', 'achievements'),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Game  $game
     * @return \Illuminate\Http\Response
     */
    public function edit(Game $game)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateGameRequest  $request
     * @param  \App\Models\Game  $game
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateGameRequest $request, Game $game)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Game  $game
     * @return \Illuminate\Http\Response
     */
    public function destroy(Game $game)
    {
        //
    }
}
