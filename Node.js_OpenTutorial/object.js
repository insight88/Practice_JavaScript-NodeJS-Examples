var members = ['egoing', 'k8805', 'hoya'];
console.log(members[1]); // k8805
var i = 0;
while (i < members.length) {
  console.log('array loop', members[i]);
  i = i + 1;
}

var roles = {
  programmer: 'egoing',
  designer: 'k8805',
  manager: 'hoya',
};
// * key-value pair

console.log(roles.designer);
console.log(roles['designer']);

for (var role in roles) {
  console.log('object => ', role, 'value => ', roles[role]);
}
// * iterative key console.log & value console.log
