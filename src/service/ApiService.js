import * as http from 'http';

class ApiService {
    hostUrl:String = 'http://localhost:4000/getImages';

    getItems(callback) {
        http.get(this.hostUrl, (resp) => {
            let data = '';

            resp.on('data', (chunk) => {
                data += chunk;
            });

            resp.on('end', () => {
                callback(JSON.parse(data));
            });

        }).on("error", (err) => {
            console.log("Error: " + err.message);
        });
    }
}

export default ApiService;
