const baseUrl = 'https://oknesset.org';
export const getDataURLByRoute = (path) => {
  if(path.charAt(0) === '/'){
    path = path.substr(1);
  }
  const query = path.split('/');
  let subject, fileName;
  if (query.length === 1) {
    subject = query[0];
    fileName = 'index';
  }
  else if (query.length === 2) {
    subject = query[0];
    fileName = query[1];
  } else if (query.length === 3) {
    subject = 'meetings';
    fileName = query[2].replace(/-/g, "/");
  } else {
    subject = fileName = '';
  }
  return `${baseUrl}${subject}/${fileName}.json`;
};