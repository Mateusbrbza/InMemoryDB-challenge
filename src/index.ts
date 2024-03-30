interface BaseRecord {
    id: string;
}

interface Database<T extends BaseRecord> {
    set(newValue: T): void;
    get(id: string): T | undefined;
}

class InMemoryDB<T extends BaseRecord> implements Database<T> {
    private db: Record<string, T> = {};

    public set(newValue: T): void {
        this.db[newValue.id] = newValue;
    }
    get(id: string): T {
        return this.db[id]
    }
}