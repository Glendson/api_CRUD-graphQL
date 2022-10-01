import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import { CreateAppointmentInput } from "../dtos/inputs/create-appointment-input";
import { Appointment } from "../dtos/models/appointment-model";
import { Customer } from "../dtos/models/customer-model";

@Resolver(() => Appointment)
export class AppointmentsResolver{
    @Query(() => [Appointment])
    async Appointments(){
        return [{
            startsAt: new Date(),
            endsAt: new Date(),
        }]
    }



    @Mutation(() => Appointment)
    async createAppointment(@Arg('data') data: CreateAppointmentInput){
        const appointment = {
            starsAt: data.startAt,
            endsAt: data.endsAt
        }

        return appointment
    }

    @FieldResolver(() => Customer)
    async Customer(@Root() appointment: Appointment){
        return{
            name: "John Doe"
        }
    }
}