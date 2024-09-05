async function getUser(id) {
    return new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve(`User ${id} fetched`);
    }, 1000);
    });
  }
  
  async function getPosts(userId) {
    return new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve(`Posts for user ${userId} fetched`);
    }, 1000);
});
  }
  
  async  function getComments(postId) {
    return new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve(`Comments for post ${postId} fetched`);
      
    }, 1000);
});
  }
  
const res1= await getUser(1)
console.log(res1)
const res2=await getPosts(1)
console.log(res2)
const res3=await getComments(1)
console.log(res3)

