import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity({ name: "event" })
export class EventEntity {
  @ObjectIdColumn()
  // tslint:disable-next-line
  public _id?: ObjectID;

  @Column({ nullable: false })
  public messageId?: string;

  @Column({ nullable: true, default: null })
  public message?: any;

  @Column({ nullable: false })
  public messageDate?: Date;

  @Column({ nullable: false })
  public updateDate?: string;

  @Column({ nullable: false })
  public creationDate?: Date;

  @Column({ nullable: true, default: null })
  public country?: string;

  @Column({ nullable: true, default: null })
  public serviceType?: string;

  @Column({ nullable: false })
  public service?: string;
}



 
  

  