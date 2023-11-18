<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\Auth\RegisterRequest;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $clients = Client::all();
        return response()->json([
            'clients' => $clients
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(RegisterRequest $request)
    {
        try{
            DB::beginTransaction();
            $fields=$request->validate([
                'rut_or_dni'=>'required',
                'name'=>'required',
                'last_name'=>'required',
                'email'=>'required|email',
                'points' => 'integer'
            ]);

            $client=Client::create([
                'rut_or_dni'=>$fields['rut_or_dni'],
                'name'=>$fields['name'],
                'last_name'=>$fields['last_name'],
                'email'=>$fields['email'],
                'points' =>$fields['points']
            ]);
            DB::commit();
            return response()->json($client,200);
        }catch (Exception $e){
            DB::rollBack();
            throw new \Exception($e->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
