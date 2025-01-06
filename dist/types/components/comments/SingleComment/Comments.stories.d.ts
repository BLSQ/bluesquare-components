declare namespace _default {
    let title: string;
    let component: {
        new (data?: string): Comment;
        prototype: Comment;
    };
    namespace argTypes {
        export { string as avatar };
        export { string as author };
        export { string as content };
        export { string as postingTime };
        export let classNames: import("prop-types").Requireable<(string | null | undefined)[]>;
    }
}
export default _default;
export const NoAvatar: any;
import { string } from 'prop-types';
