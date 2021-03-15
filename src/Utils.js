export const FormatText = (text) => {
    return text.substring(0, 90) + '...'
}

export const convertToList = (arr__, elements) => {
    var matrix = [], i, k
    for (i = 0, k = -1; i < arr__.length; i++) {
        if (i % elements === 0) {
            k++
            matrix[k] = []
        }
        matrix[k].push(arr__[i])
    }
    return matrix
}

export const EXTERNAL_URL = 'http://localhost:443/api'
export const BASE_URL = 'http://localhost:443/api'
// export const EXTERNAL_URL = 'https://api-aleducation-com.umbler.net/api'
export const MESSAGE = "Olá, tudo bem? Adorei seu curso e gostaria de mais algumas informações!"
export const OPTIONS = { year: 'numeric', month: 'short', day: 'numeric' }

// export const uploadCertified = (id__param, files__param) => {
//     const collection = await Collections.findById(id__param)
//     try {
//       var nfile,
//           pfile = './app/assets/collections-certificates/'+id__param+'/',
//           mfile = files__param.file;
//       if (!fs.existsSync(pfile)) {
//         fs.mkdirSync(pfile)
//       }
//       if (!mfile) {
//         nfile = null
//       } else {
  
//         if(fs.existsSync(pfile + collection.idRequester + collection.idCooperative + '.pdf')) {
//           var result = fs.readdirSync(pfile)
//           nfile = collection.idRequester + collection.idCooperative + result.length + '.pdf'
//        } else {
//          nfile = collection.idRequester + collection.idCooperative + '.pdf'
//        }
//         mfile.mv(pfile + nfile)
//       }
//       Object.assign(collection, { certifiedPath: pfile, certifiedName: nfile, certifiedDateUpload: new Date() });
//       await collection.save()
//     } catch (e) {
//       throw e.message
//     }
//   }