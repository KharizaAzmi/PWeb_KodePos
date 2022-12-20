// document.getElementById('getPosts').addEventListener('click', getPosts);

// 		// kita buat function getPosts, jadi ketika diklik dia akan melakukan apa ? nah kita buat fungsi-nya (function)
// 		function getPosts() {
// 			// kita gunakan fetch dalam kita ambil data sample.txt yang sudah kita buat
// 			fetch('https://jsonplaceholder.typicode.com/posts')
// 			// kita buat response menjadi json
// 			.then((response) => response.json())
// 			// lalu data nya kita ambil dan kita masuken ke p id output
// 			.then((data) => {
// 				// kita buat variabel output
// 				let output = '<h2>posts</h2>';
// 				// kita console.log agar mengetahui apakah data nya sudah masuk atau belum
// 				console.log(data);
// 				// forEach ini adalah looping dan dinamakan post
// 				data.forEach((post) => {
// 					// kita tambahkan output-nya jangan lupa gunakan backslash `` yang di sebelah angka nomer 1
// 					// kita panggil id name email didapat dari post.json
// 					output += `
// 						<div>
// 							<h3>${post.title}</h3>
// 							<p>${post.body}</p>
// 						</div>
// 					`;
// 				})
// 				// kita panggil id output agar bisa di tampilkan ke browser saat di klik
// 				document.getElementById('output').innerHTML = output;
// 			})
// 			// membuat catch jadi kalau ada yang error langsung ketawan
// 			.catch((err) => console.log(err));
// 		}

//#region  //*=========== Element Select ===========
// const pronvinsiSelect = document.getElementById('provinsiDropDown');
// const kabupatenSelect = document.getElementById('kabupatenDropDown');
// const kecamatanSelect = document.getElementById('kecamatanDropDown');
// const kelurahanSelect = document.getElementById('kelurahanDropDown');
// const resultElement = document.getElementById('result');
// //#endregion  //*======== Element Select ===========

// //#region  //*=========== Fetch Data ===========
// async function getProvinsi() {
//   const response = await fetch('https://ibnux.github.io/data-indonesia/provinsi.json');
//   const data = await response.json();
//   return data;
// }

// async function getKabupaten(id) {
//   const response = await fetch(`https://ibnux.github.io/data-indonesia/kabupaten/${id}.json`);
//   const data = await response.json();
//   return data;
// }

// const getKecamatan = async (id) => {
//   const response = await fetch(`https://ibnux.github.io/data-indonesia/kecamatan/${id}.json`);
//   const data = await response.json();
//   return data;
// };

// const getKelurahan = async (id) => {
//   const response = await fetch(`https://ibnux.github.io/data-indonesia/kelurahan/${id}.json`);
//   const data = await response.json();
//   return data;
// };

// const getResult = async (key) => {
//   const response = await fetch(`https://kodepos.vercel.app/search?q=${key}`);
//   const data = await response.json();
//   return data;
// };
// //#endregion  //*======== Fetch Data ===========

// //#region  //*=========== Display Selection ===========
// const removeData = (e) => {
//   while (e.hasChildNodes()) {
//     e.removeChild(e.firstChild);
//   }
// };

// const showProvinsi = async () => {
//   const options = await getProvinsi();
//   pronvinsiSelect.value = options[0];
//   options.forEach((key) => {
//     const newOption = document.createElement('option');
//     // newOption.value = key.id;
//     // newOption.text = key.nama;
//     newOption.innerHTML = `${key.id}`;
//     newOption.innerText = `${key.nama}`;
//     pronvinsiSelect.appendChild(newOption);
//   });
//   showKabupaten();
// };

// const showKabupaten = async () => {
//   // removeData(kabupatenSelect);
//   const options = await getKabupaten(pronvinsiSelect.value);
//   kabupatenSelect.value = options[0];
//   options.forEach((key) => {
//     const newOption = document.createElement('option');
//     newOption.value = key.id;
//     newOption.text = key.nama;
//     // newOption.innerHTML = `${key.id}`;
//     // newOption.innerText = `${key.nama}`;
//     kabupatenSelect.appendChild(newOption);
//   });
//   showKecamatan();
// };

// async function showKecamatan() {
//   //   removeData(kecamatanSelect);
//   const options = await getKecamatan(kabupatenSelect.value);
//   kecamatanSelect.value = options[0];
//   options.forEach((element) => {
//     const newOption = document.createElement('option');
//     newOption.value = element.id;
//     newOption.text = element.nama;
//     kecamatanSelect.appendChild(newOption);
//   });
//   showKelurahan();
// }

// const displayKelurahan = async () => {
//   removeData(kelurahanSelect);
//   const options = await getKelurahan(kecamatanSelect.value);
//   kelurahanSelect.value = options[0];
//   options.forEach((element) => {
//     const newOption = document.createElement('option');
//     newOption.value = element.id;
//     newOption.text = element.nama;
//     kelurahanSelect.appendChild(newOption);
//   });
//   displayResult();
// };

// const displayResult = async () => {
//   resultElement.innerHTML = 'memuat...';

//   const results = await getResult(kelurahanSelect.options[kelurahanSelect.selectedIndex].text);
//   if (results.data.length <= 0) {
//     resultElement.innerHTML = 'tidak ditemukan data';
//   } else {
//     resultElement.innerHTML = results.data[0].postalcode;
//   }
// };

// showProvinsi();
//#endregion  //*======== Display Selection ===========

//#region  //*=========== Element Select ===========
const pronvinsiSelect = document.getElementById('provinsi');
const kabupatenSelect = document.getElementById('kabupaten');
const kecamatanSelect = document.getElementById('kecamatan');
const kelurahanSelect = document.getElementById('kelurahan');
const resultElement = document.getElementById('result');

async function getProvinsi() {
  const response = await fetch('https://ibnux.github.io/data-indonesia/provinsi.json');
  const data = await response.json();
  return data;
}

async function getKabupaten(id) {
  const response = await fetch(`https://ibnux.github.io/data-indonesia/kabupaten/${id}.json`);
  const data = await response.json();
  return data;
}

async function getKecamatan(id) {
  const response = await fetch(`https://ibnux.github.io/data-indonesia/kecamatan/${id}.json`);
  const data = await response.json();
  return data;
}

async function getKelurahan(id) {
  const response = await fetch(`https://ibnux.github.io/data-indonesia/kelurahan/${id}.json`);
  const data = await response.json();
  return data;
}

async function getResult(key) {
  const response = await fetch(`https://kodepos.vercel.app/search?q=${key}`);
  const data = await response.json();
  return data;
}

const removeData = (e) => {
  //   for (var i = 0; i < e.length; i++) {
  //     if (e.hasChildNodes()) {
  //       e.removeChild(e.firstChild);
  //     }
  //   }
  while (e.hasChildNodes()) {
    e.removeChild(e.firstChild);
  }
};

async function displayProvinsi() {
  const options = await getProvinsi();
  //   const output = '';
  // pronvinsiSelect.value = options[0];
  // options.forEach((key) => {
  //   const newOption = document.createElement('option');
  //   newOption.value = `${key.id}`;
  //   newOption.text = `${key.nama}`;
  //   pronvinsiSelect.appendChild(newOption);
  // });
  for (const key of options) {
    const newOption = document.createElement('option');
    newOption.value = `${key.id}`;
    newOption.text = `${key.nama}`;
    pronvinsiSelect.appendChild(newOption);
  }
  displayKabupaten();
}

async function displayKabupaten() {
  removeData(kabupatenSelect);
  const options = await getKabupaten(pronvinsiSelect.value);
  //   kabupatenSelect.value = options[0];
  //   options.forEach((key) => {
  //     const newOption = document.createElement('option');
  //     newOption.value = `${key.id}`;
  //     newOption.text = `${key.nama}`;
  //     kabupatenSelect.appendChild(newOption);
  //   });
  for (const key of options) {
    const newOption = document.createElement('option');
    newOption.value = `${key.id}`;
    newOption.text = `${key.nama}`;
    kabupatenSelect.appendChild(newOption);
  }
  displayKecamatan();
}

async function displayKecamatan() {
  removeData(kecamatanSelect);
  const options = await getKecamatan(kabupatenSelect.value);
  //   kecamatanSelect.value = options[0];
  //   options.forEach((key) => {
  //     const newOption = document.createElement('option');
  //     newOption.value = `${key.id}`;
  //     newOption.text = `${key.nama}`;
  //     kecamatanSelect.appendChild(newOption);
  //   });
  for (const key of options) {
    const newOption = document.createElement('option');
    newOption.value = `${key.id}`;
    newOption.text = `${key.nama}`;
    kecamatanSelect.appendChild(newOption);
  }
  displayKelurahan();
}

async function displayKelurahan() {
  removeData(kelurahanSelect);
  const options = await getKelurahan(kecamatanSelect.value);
  //   kelurahanSelect.value = options[0];
  //   options.forEach((key) => {
  //     const newOption = document.createElement('option');
  //     newOption.value = `${key.id}`;
  //     newOption.text = `${key.nama}`;
  //     kelurahanSelect.appendChild(newOption);
  //   });
  for (const key of options) {
    const newOption = document.createElement('option');
    newOption.value = `${key.id}`;
    newOption.text = `${key.nama}`;
    kelurahanSelect.appendChild(newOption);
  }
  displayResult();
}

async function displayResult() {
  resultElement.innerHTML = 'memuat...';

  const results = await getResult(kelurahanSelect.options[kelurahanSelect.selectedIndex].text);
  if (results.data.length <= 0) {
    resultElement.innerHTML = 'tidak ditemukan data';
  } else {
    resultElement.innerHTML = results.data[0].postalcode;
  }
}

displayProvinsi();
