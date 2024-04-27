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

  async createUser<T>(body: T): Promise<void> {
    await fetch("http://localhost:8080/add-user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  }
}

export default new Services();
