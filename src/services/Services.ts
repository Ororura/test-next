class Services {
  async get<T>(url: string): Promise<T | null> {
    const response: Response = await fetch(url);
    if (response.ok) {
      return response.json();
    }
    return null;
  }
}
