//congressional district
const district = "5th Congressional District"

//platform statements:
const platform = Object.create({},{
    taxes:{
        enumerable: true,
        writable: false,
        value:"i hate taxes"
    },
    jobs:{
        enumerable: true,
        writable: false,
        value:"I love jobs"
    },
    infrastructure:{
        enumerable: true,
        writable: false,
        value:"I love infrastructure"
    },
    healthCare:{
        enumerable: true,
        writable: false,
        value:"lol health care for everyone?"
    },
    crimeEnforce:{
        enumerable: true,
        writable: false,
        value:"every one should have a FatMan"
    }
})

//URL for donation form
const url = Object.create({},{
    location:{    
        enumerable: true,
        writable: false,
        value: "URL"
    }
})

//calendar of events

const calendar = Object.create({},{
  dateCreated:{
    enumerable: true,
    writable: false,
    value: "date"
  },
  event:{
    enumerable: true,
    writable: false,
    value: "eventname"
  },
  location:{
    enumerable: true,
    writable: false,
    value:"where it happened"
  }  
})

const calendar1 = Object.create({},{
    dateCreated:{
      enumerable: true,
      writable: false,
      value: "date"
    },
    event:{
      enumerable: true,
      writable: false,
      value: "eventname"
    },
    location:{
      enumerable: true,
      writable: false,
      value:"where it happened"
    }  
  })
let calendarEvents = [calendar, calendar1]

//volunteer information
const volInfo = Object.create ({},{
    name:{
        enumerable: true,
        writable: false,
        value:"name"
    },
    address:{
        enumerable: true,
        writable: false,
        valuse:"address"
    },
    email:{
        enumerable: true,
        writable: false,
        value:"email"
    },
    phoneNumber:{
        enumerable: true,
        writable: false,
        value: "23894"
    },
    availability:{
        enumerable: true,
        writable: false,
        value: "time when they are avail"
    },
    activities:{
        enumerable: true,
        writable: false,
        value:"what they are willing to do" 
    }
})

//biography
const bio = Object.create({},{
    firstName:{
        enumerable: true,
        writable: false,
        value:""
    },

    lastName:{
        enumerable: true,
        writable: false,
        value:""
    },

    homeTown:{
        enumerable: true,
        writable: false,
        value:""
    },

    party:{
        enumerable: true,
        writable: false,
        value:""
    },

    aboutMe:{
        enumerable: true,
        writable: false,
        value:""
    },
})

//image gallery
const img = Object.create({},{
    headShot:{
        enumerable: true,
        writable: false,
        value:""
    },

    famPic:{
        enumerable: true,
        writable: false,
        value:""
    },
    constituentsPic:{
        enumerable: true,
        writable: false,
        value:""
    }
})

//mission statement
const mission = {
    statement:"To kill bad guys"
}

//url for registering to vote
const urlToVote = Object.create({},{
    location:{    
        enumerable: true,
        writable: false,
        value: "URL"
    }
})

const congressperson = [district, bio, platform, mission, img, calendarEvents, url, urlToVote]
console.log(congressperson)