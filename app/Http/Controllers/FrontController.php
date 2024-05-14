<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Requests\Front\Store;
use App\Models\ProjectOrder;

class FrontController extends Controller
{
    public function index(){
          $projects=Project::all();
        return Inertia('Front/Index',[
            'projects'=> $projects
        ]);

    }//
    public function detail(Project $project){
         $assignedTools = $project->tools()->get();
           $screenshots = $project->screenshots()->orderBy('deleted_at', 'desc')->get();
           $projects=Project::all();
        return inertia('Front/Detail', [
            'assignedTools' => $assignedTools,
            'screenshots'=>$screenshots,
            'projects' => $project,
        ]);

    }//
     public function Book(){
    return Inertia('Front/Book');
    }//
    
    public function store(Store $request){
        $data = $request->validated();
      
       $meeting= ProjectOrder::create($data); 

         return redirect(route('front.index'))->with([
            'message' => "Book Meeting successfully",
            'type' => 'success'
        ]);
    }
}
