
// async function getDATA(event){
//   let name=document.querySelector("input").value;
//   fetch(`https://api.github.com/users/${name}`)
//     .then(response =>{
//       return response.json();
//     })
//     .then(data =>{
//       console.log(data);
//       // document.querySelector(".name").innerText=name;
//       document.querySelector(".image").src=data.avatar_url;
//       // console.log(src);
//         document.querySelector(".name").innerText="name : "+data.login;
//         document.querySelector(".repos").innerText="repos : "+data.public_repos;
//         document.querySelector(".followers").innerText="followers : "+data.followers;
//         document.querySelector(".following").innerText="following : "+data.following;
//     })
// }


async function getDATA(){
  let name=document.querySelector("input").value;
  let response=await fetch(`https://api.github.com/users/${name}`)
  let data=await response.json();
  // console.log(data);
  document.querySelector(".image").src=data.avatar_url;
  document.querySelector(".name").innerText=data.name;
  document.querySelector(".user_name").innerText=data.login;
  document.querySelector(".repos").innerText=data.public_repos;
  document.querySelector(".followers").innerText=data.followers;
  document.querySelector(".following").innerText=data.following;
  document.querySelector(".location").innerText=data.location;
  document.querySelector(".blog").innerText=data.blog;
  document.querySelector(".twitter_username").innerText=data.twitter;
  document.querySelector(".following").innerText=data.following;

  document.querySelector("input").value="";
}

function buttonValue(){
  // setTimeout(()=>{
    // document.querySelector("button").value=" ";
  // },2000)
}
