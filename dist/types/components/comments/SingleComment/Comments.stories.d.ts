declare namespace _default {
    const title: string;
    const component: {
        new (data?: string | undefined): Comment;
        prototype: Comment;
    };
    namespace argTypes {
        export { string as avatar };
        export { string as author };
        export { string as content };
        export { string as postingTime };
        export const classNames: import("prop-types").Requireable<(string | null | undefined)[]>;
    }
}
export default _default;
export const NoAvatar: any;
import { string } from "prop-types";
