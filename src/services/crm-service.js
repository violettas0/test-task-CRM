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
    async getObjectInfo() {
        const url = `api/objects`;
        return await CRMService.getJSON(url)
    }
    static async postJSON(data, url) {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
    }
    async postClientsInfo(data) {
        const url = `api/clients`;
        return await CRMService.postJSON(data, url)
    }

    async postObjectsInfo(data) {
        const url = `api/objects`;
        return await CRMService.postJSON(data, url)
    }
}