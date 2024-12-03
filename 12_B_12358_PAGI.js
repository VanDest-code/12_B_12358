console.log("PENDAFTARAN MAHASISWA BARU UNIVERSITAS CENDERAWASIH");
console.log("_".repeat(50));

function validateData(studentData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const { nama, umur, ktp } = studentData;
            if (!nama || !umur || !ktp) {
                reject("Invalid data");
            } else if (umur < 17) {
                reject("Student is too young");
            } else if (!/^\d{16}$/.test(ktp)) {
                reject("Invalid KTP number");
            } else {
                resolve();
            }
        }, 5000);
    });
}

async function processData(studentData) {
    try {
        await validateData(studentData);
        console.log(`Student ${studentData.nama} has been successfully registered`);
    } catch (error) {
        console.log(`An error occurred: ${error}`);
    }
}

processData({ nama: "", umur: 22, ktp: "1234567890123456" });
processData({ nama: "Fahmy", umur: 16, ktp: "1234567890123456" });
processData({ nama: "Kevin", umur: 20, ktp: "12345" });
processData({ nama: "Destinus", umur: 19, ktp: "2317123581234567" });
processData({ nama: "Kay", umur: 22, ktp: "1122334455667788" });
