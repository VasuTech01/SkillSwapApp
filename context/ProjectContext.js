import React, { createContext, useState,useLayoutEffect } from "react";
import { database } from "../config/firebase";
import { collection,getDocs,onSnapshot,query,orderBy } from "firebase/firestore";
import axios from "axios";
const projectDoc =collection(database,"Projects");
const CREATE_PROJECT = "https://skillswapservice.onrender.com/projects/create";
const PROJECT_FILEUPLOAD = "https://skillswapservice.onrender.com/projects/file_upload";
const PROJECT_BYID = "https://skillswapservice.onrender.com/projects/";
const DELETE_PROJECT = "https://skillswapservice.onrender.com/projects/delete/";


export const ProjectContext = createContext();
const ProjectContextProvider = ({children}) => {
    const [projects, setProjects] = useState(null);
    useLayoutEffect(() => {
        const unsubscribe = onSnapshot(projectDoc, snapshot => {
            console.log("project SnapShot");
            setProjects(snapshot.docs.map(doc => {
                return {
                    _id: doc.id,
                    title: doc.data().title,
                    desc: doc.data().description,
                    project_id: doc.data().project_id,
                    class: doc.data().class,
                    skills:doc.data().skills
                }
            }))
        })
        return () => unsubscribe();
    },[]);

    const CreateProjects = async (project) => {
        try {
            const res = await axios.put(CREATE_PROJECT, project);
            console.log("Created Project Response", res);
            return { success: true,msg:"Project Created" };
        } catch (e) {
            console.log(e.message);
            return { success: false,msg:"Error While Creating Project"};
        }
    }
    const value = {
        projects,
        create_project:CreateProjects
   }

    return (
        <ProjectContext.Provider value={value}>
    {children}
        </ProjectContext.Provider>
    );
}

export default ProjectContextProvider;