<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\Admin\Project\Store;
use App\Http\Requests\Admin\Project\Update;


class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $projects=Project::withTrashed()->orderBy('deleted_at','desc')->get();
        return Inertia('Admin/Project/Index',[
            'projects'=> $projects
        ]);
       //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

       return Inertia('Admin/Project/Create');  //
    }

    /**
     * Store a newly created resource in storage.
     */
   public function store(Store $request)
    {
       $data = $request->validated();
       $data['cover'] = Storage::disk('public')->put('projects',$request->file('cover'));
       $data['slug'] = Str::slug($data['name']); //name: The god father, slug: the-godfather
       $project= Project::create($data); 

         return redirect(route('admin.dashboard.project.index'))->with([
            'message' => "Movie inserted successfully",
            'type' => 'success'
        ]);
    }
    /**
     * Display the specified resource.
     */
    public function show(Project $project)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Project $project)
    {
        return inertia('Admin/Project/Edit',[
        'project'=>$project
       ]);////
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Update $request, Project $project)
    {
        $data = $request->validated();
        if($request->file('cover')){
             $data['cover'] = Storage::disk('public')->put('projects',$request->file('cover'));
             Storage::disk('public')->delete($project->cover);
        } else{
            $data['cover']= $project->cover;
        
        }
        $project->update($data);
       return redirect(route('admin.dashboard.project.index'))->with([
         'message' => "Movie Updated successfully",
            'type' => 'success'
       ]); // //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
    {
        $project->delete();
        return redirect(route('admin.dashboard.project.index'))->with([
         'message' => "Movie Deleted successfully",
            'type' => 'success'
       ]);//
    }
    public function restore($project)
    {
       Project::withTrashed()->find($project)->restore();
       return redirect(route('admin.dashboard.project.index'))->with([
         'message' => "Project Restored successfully",
            'type' => 'success'
       ]);//
    }
}
