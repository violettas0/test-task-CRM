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
        return await CRMService.getJSON(url)
    }
    async postJSON(data) {
        const response = await fetch(`/api/clients`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
    }
}