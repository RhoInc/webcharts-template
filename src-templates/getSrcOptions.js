export default function getSrcOptions(){
    return [
        { 
            folder: "linkedListing", 
            description: "0 (default) - Simple Chart with no callbacks or controls.",
            datapath: 'https: //raw.githubusercontent.com/RhoInc/data-library/master/data/clinical-trials/sdtm/cdisc-pilot-01/lb.csv' 
        },
        { 
            folder: "simple", 
            description: "1 - Line Chart with controls and linked listing defined in callbacks.",
            datapath: 'https: //raw.githubusercontent.com/RhoInc/data-library/master/data/miscellaneous/iris.csv' 
        }
    ]
}