const runQuery = async (sql) => {
    const url = "https://ragnew19.webhosting1.eeecs.qub.ac.uk/dbConnector.php";

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({
                query: sql
            })
        });

        const text = await response.text();
        console.log("RAW PHP RESPONSE:", text);

        return JSON.parse(text);

    } catch (error) {
        console.error("runQuery error:", error);
        throw error;
    }
};