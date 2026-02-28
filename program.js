let currentTab = "all";

const tabActive = ["bg-navy", "border-navy", "text-white"];
const tabInactive = ["bg-transparent", "text-slate-700", "border-slate-200", "text-black"];

//get the container for all needed elements 
const allContainer = document.getElementById("all-container");
const interviewContainer = document.getElementById("interview-container");
const rejectedContainer = document.getElementById("reject-container");
const emptyState = document.getElementById("empty-state");
function switchTab(tab) {
    const tabs = ["all", "interview", "rejected"];
    currentTab = tab;
    for (const t of tabs) {
        const tabName = document.getElementById("tab-" + t);

        if (t === tab) {
            tabName.classList.remove(...tabInactive);
            tabName.classList.add(...tabActive);
        }
        else {
            tabName.classList.remove(...tabActive);
            tabName.classList.add(...tabInactive);
        }
    }

    const sections = [allContainer, interviewContainer, rejectedContainer];

    for (const section of sections) {
        section.classList.add("hidden");
    }

    emptyState.classList.add("hidden");

    if (tab === "all") {
        allContainer.classList.remove("hidden");
        if (allContainer.children.length < 1) {
            emptyState.classList.remove("hidden");
        }
    }
    else if (tab === "interview") {
        interviewContainer.classList.remove("hidden");
        if (interviewContainer.children.length < 1) {
            emptyState.classList.remove("hidden");
        }
    }
    else {
        rejectedContainer.classList.remove("hidden");
        if(rejectedContainer.children.length < 1){
            emptyState.classList.remove("hidden");
        }
    }
    updateStat();
}

// these variable for counting the dashboard stat
const totalStat = document.getElementById("stat-total");
const interviewStat = document.getElementById("stat-interview");
const rejectStat = document.getElementById("stat-reject");
const availJobsStat = document.getElementById("available-jobs");

// always remain in all tab
switchTab(currentTab);




// card handle
document.getElementById("jobs-container").addEventListener("click", function (event) {
    const clickedElement = event.target;

    const card = clickedElement.closest(".card");

    const status = card.querySelector(".not-applied");

    const parent = card.parentNode;

    if (clickedElement.classList.contains("interview")) {
        status.innerText = "Interviewed";
        interviewContainer.appendChild(card);
    }
    else if (clickedElement.classList.contains("rejected")) {
        status.innerText = "Rejected"
        rejectedContainer.appendChild(card);
    }
    else if (clickedElement.classList.contains("delete")) {
        parent.removeChild(card);
    }
    updateStat();
});

// update all stat globally
updateStat();


// updating dashboard for jobs
function updateStat() {
    
    const jobsCount = {
        all: allContainer.children.length,
        interview: interviewContainer.children.length,
        rejected: rejectedContainer.children.length,
    };
    totalStat.innerText = jobsCount.all;
    interviewStat.innerText = jobsCount.interview;
    rejectStat.innerText = jobsCount.rejected;

    availJobsStat.innerText = jobsCount[currentTab];

    if(jobsCount[currentTab] < 1)
    {
        emptyState.classList.remove("hidden");
    }
    else{
        emptyState.classList.add("hidden");
    }

}