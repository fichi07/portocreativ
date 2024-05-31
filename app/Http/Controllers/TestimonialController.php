<?php

namespace App\Http\Controllers;

use App\Models\Testimonial;
use Illuminate\Http\Request;
use App\Models\Project;
use App\Http\Requests\Front\Store_testi;
use Illuminate\Support\Facades\Storage;

class TestimonialController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $testimonials=Testimonial::orderBy('deleted_at','desc')->get();

        return Inertia('Admin/Testimony/Index',[
            'testimonials'=> $testimonials,
            
        ]);////   //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
      
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Store_testi $request)
    {
        $data = $request->validated();
       $data['logo'] = Storage::disk('public')->put('testimonials',$request->file('logo'));
       $testi= Testimonial::create($data); 

        return redirect()->back()->with([
            'message' => "Review successfully",
            'type' => 'success'
        ]);  //
    }

    /**
     * Display the specified resource.
     */
    public function show(Testimonial $testimonial)
    {
           $testimonial=Testimonial::withTrashed()->orderBy('deleted_at','desc')->get();

        return Inertia('Admin/Testimony/Detail',[
            'testimonial'=> $testimonial,
            
        ]);////   //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Testimonial $testimonial)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, testimonial $testimonial)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Testimonial $testimonial)
    {
        //
    }
}
