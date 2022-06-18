function listFilesAndDirectories(reference) {

    return reference.then(
        result => {
            result.items.forEach(ref => {
                //console.log(ref.fullPath);
            });

            return Promise.resolve();
        })
        .catch(error => {
            console.log("Ocorreu um erro:", error)
            reject(error)
        });
}