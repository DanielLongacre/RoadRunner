let profileListEL = document.getElementById("profile-list");
let btnProfile = document.getElementById("btnProfile");
let profileNameEL = document.getElementById("profile-name");

const loadProfiles = () => {
    fetch("/api/profile")
        .then(response => response.json())
        .then(profiles => {
            profiles.forEach(profile => addDisplay(profile.name, profile.endorsedCount))
        })
}

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

btnProfile.addEventListener("click", (event) => {
    event.preventDefault()
    
    const profileName = profileNameEL.value;

    if(profileName.length > 0) {

        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        fetch("/api/profile", {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify({
                name: profileName,
                endorsedCount: 500
            }),
        })
        .then(response => response.json())
        .then(newProfile => {
            addDisplay(newProfile.name, 300)
        })

    } else {
        alert(`Profile name is required..`)
    }

})

loadProfiles();