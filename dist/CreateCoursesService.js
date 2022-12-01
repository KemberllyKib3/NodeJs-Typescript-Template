"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCoursesService {
    execute({ duration, name, educator }) {
        console.log(name, duration, educator);
    }
}
exports.default = new CreateCoursesService();
