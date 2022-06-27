/*
 * SourceConfig 
 */
import type { ISourceConfig } from "log-object-processor";

export class SourceConfig implements ISourceConfig {
    public type     :string;
    public location :string;

    constructor ( _type :string, _location :string ) {
        this.type     = _type;
        this.location = _location; }
}
