<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;

class StudentController extends Controller
{
    //

    function AddDataStudent(Request $req){

        $data = new Student;
        $data->name=$req->input('name');
        $data->email=$req->input('email');
        $data->phone=$req->input('phone');
        $data->image_student=$req->file('image_student')->store('imageStudent');
        $data->save();
        return $data;
    }

    function ShowDataStudent(Request $req){

        return Student::all();
    }

    function getDataStudent($id){

        return Student::find($id);
    }

    function UpdateDataStudent(Request $req, $id){

        $update_data = Student::find($id);
        $update_data->name=$req->input('name');
        $update_data->email=$req->input('email');
        $update_data->phone=$req->input('phone');

        if($req->file('image_student')){
            $update_data->image_student=$req->file('image_student')->store('imageStudent');
        }

        $update_data->save();
        return $update_data;
    }

    function DeleteDataStudent($id){

        $delete_data = Student::where('id',$id)->delete();

        if($delete_data){

            return ['result' => 'Data Delete Successfull'];

        } else{

            return ['result' => 'Failed Data Delete'];
        }
    }

    function SeachData($key){
        return Student::where('name', 'LIKE', "%$key%")->get();
    }


}
