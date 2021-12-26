<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        //
        $users = User::All();
        return Inertia::render('Homepage', [
            'users' => $users
        ]);
    }

    /*
     * @return Response
     */
    public function show($user)
    {
        $user = User::where('username', $user)->FirstOrFail();
        return Inertia::render('User', [
            'user' => $user,
            'games' => $user->games,
        ]);
    }
}
