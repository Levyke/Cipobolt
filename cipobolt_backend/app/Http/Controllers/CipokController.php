<?php

namespace App\Http\Controllers;

use App\Models\Cipok;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Test\Constraint\ResponseFormatSame;

use function PHPSTORM_META\map;

class CipokController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $cipo = DB::select("SELECT cipok.cipo_id, cipok.nev, cipok.meret, cipok.ar, markak.marka_id, markak.nev AS markaNev, markak.szarmazasi_orszag, markak.img FROM `cipok` INNER JOIN markak ON markak.marka_id = cipok.marka_id");
        return response()->json($cipo);
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
            'meret' => 'required|integer|min:35|max:50',
            'ar' => 'required|integer|min:15000|max:100000',
            'marka_id' => 'required|exists:markak,marka_id'
        ], [
            'nev.required' => 'A név kitöltése kötelező',

            'meret.required' => 'A méret megadása kötelező',
            'meret.integer' => 'A méret csak egész szám lehet',
            'meret.min' => 'A méret nem lehet 35-nél kisebb',
            'meret.max' => 'A méret nem lehet 50-nél nagyobb',

            'ar.required' => 'Az ár megadása kötelező',
            'ar.integer' => 'Az ár csak egész szám lehet',
            'ar.min' => 'Az ár nem lehet 15.000 Ft-nál kisebb',
            'ar.max' => 'Az ár nem lehet 100.000 Ft-nál nagyobb',

            'marka_id.required' => 'A márka azonosítójának kitöltése kötelező',
            'marka_id.exists' => 'A márka azonosító csak olyan lehet, ami létezik'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Hiba a mentés során',
                'errors' => $validator->errors()->toArray()
            ], 422);
        }

        $newRecord = new Cipok();
        $newRecord -> nev = $request->nev;
        $newRecord -> meret = $request->meret;
        $newRecord -> ar = $request->ar;
        $newRecord -> marka_id = $request->marka_id;
        $newRecord -> save();

        return response()->json([
            'success' => true,
            'message' => 'Sikeres mentés',
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $cipo = DB::select('SELECT cipok.cipo_id, cipok.nev, cipok.meret, cipok.ar, markak.marka_id, markak.nev AS markaNev, markak.szarmazasi_orszag, markak.img FROM `cipok` INNER JOIN markak ON markak.marka_id = cipok.marka_id WHERE cipok.cipo_id = ?', [$id]);

        if (empty($cipo)) {
            return response()->json(["message" => "Nincs ilyen azonosítójú cipő a listában"], 404);
        }
        return response()->json($cipo);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Cipok $cipok)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $cipo = Cipok::find($id);
        if (!empty($cipo)) {
            $cipo -> ar = $request->integer("ar");
            $cipo -> save();

            return response()->json(["message" => "A módosítás sikeresen megtörtént"], 201);
        }
        return response()->json(["message" => "Hiba a módosítás során"], 402);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $cipo = Cipok::find($id);
        if (!empty($cipo)) {
            $cipo -> delete();

            return response()->json(["message" => "A törlés sikeresen megtörtént"], 201);
        }
        return response()->json(["message" => "Hiba a törlés során"], 402);
    }
}
