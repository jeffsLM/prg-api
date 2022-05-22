import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../erros/appError";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

/**
 * O SERVICE NUNCA DEVE CONHECER A BASE DADOS
 */
interface IRequest {
    name: string;
    description: string;
}
@injectable()
class CreateSpecificationUseCase {
    constructor(
        @inject("SpecificationRepository")
        private specificationRepository: ISpecificationRepository
    ) {}

    async execute({ name, description }: IRequest): Promise<void> {
        const specificationAlreadyExists =
            await this.specificationRepository.findByName(name);

        if (specificationAlreadyExists) {
            throw new AppError(`Specification ${name} already exists!`);
        }

        await this.specificationRepository.create({ name, description });
    }
}

export { CreateSpecificationUseCase };
