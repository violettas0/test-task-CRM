import React from "react";

export default class CRMService {
    static async getJSON(url) {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Could not fetch ${url}, received ${response.status}`)
        }
        return await response.json();
    }
    async getClientsInfo() {
        const url = `api/clients`;
        const clients = await CRMService.getJSON(url);
        return clients.map((client) => client);
    }
}