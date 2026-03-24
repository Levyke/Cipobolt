<?php

namespace App\Http\Controllers;

use App\Models\Markak;
use Illuminate\Container\Attributes\DB as AttributesDB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class MarkakController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $marka = DB::select('SELECT * FROM `markak`');
        return response()->json($marka);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nev' => 'required',
            'szarmazasi_orszag' => 'required',
            'img' => 'required'
        ], [
            'nev.required' => 'A név kitöltése kötelező',

            'szarmazasi_orszag.required' => 'A származási ország kitöltése kötelező',

            'img.required' => 'A kép kitöltése kötelező',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Hiba a mentés során',
                'errors' => $validator->errors()->toArray()
            ], 422);
        }

        $newRecord = new Markak();
        $newRecord -> nev = $request->nev;
        $newRecord -> szarmazasi_orszag = $request->szarmazasi_orszag;
        $newRecord -> img = $request->img;
        $newRecord -> save();

        return response()->json([
            'success' => true,
            'message' => 'Sikeres mentés',
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $mnev)
    {
        $marka = DB::select('SELECT cipok.cipo_id, cipok.nev, cipok.meret, cipok.ar FROM `cipok` INNER JOIN markak ON markak.marka_id = cipok.marka_id WHERE markak.nev = ?', [$mnev]);

        if (empty($marka)) {
            return response()->json(["message" => "Nincs ilyen márka a listában"], 404);
        }
        return response()->json($marka);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Markak $markak)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $marka = Markak::find($id);
        if (!empty($cipo)) {
            $marka -> img = $request->string("img");
            $marka -> nev = $request->string("nev");
            $marka -> save();

            return response()->json(["message" => "A módosítás sikeresen megtörtént"], 201);
        }
        return response()->json(["message" => "Hiba a módosítás során"], 402);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Markak $markak)
    {
        //
    }
}
