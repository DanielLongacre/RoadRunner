let profileListEL = document.getElementById("profile-list");
let btnProfile = document.getElementById("btnProfile");
let profileNameEL = document.getElementById("profile-name");

const addDisplay = (name, endorsedCount) => {
    profileListEL.innerHTML += `
    <div class="col-12 col-xl-6">
        <div class="card mb-3">
            <h4 class="card-header bg-dark text-light p-2 m-0">${name} <br /><span
            class="text-white"
                    style="font-size: 1rem">currently has ${endorsedCount} endorsed skills</span>
            </h4>
            <a class="btn btn-block btn-squared btn-light text-dark"
                href="/profiles/655c11ce2da398e3131758ff">View and endorse their skills.</a>
        </div>
    </div>
                    
    `
}