class Services {
  async get<T>(url: string): Promise<T | null> {
    const response: Response = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      return response.json();
    }
    return null;
  }
}

export default new Services();
