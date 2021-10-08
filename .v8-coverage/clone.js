"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Creates a deep copy of a process coverage.
 *
 * @param processCov Process coverage to clone.
 * @return Cloned process coverage.
 */
function cloneProcessCov(processCov) {
    const result = [];
    for (const scriptCov of processCov.result) {
        result.push(cloneScriptCov(scriptCov));
    }
    return {
        result,
    };
}
exports.cloneProcessCov = cloneProcessCov;
/**
 * Creates a deep copy of a script coverage.
 *
 * @param scriptCov Script coverage to clone.
 * @return Cloned script coverage.
 */
function cloneScriptCov(scriptCov) {
    const functions = [];
    for (const functionCov of scriptCov.functions) {
        functions.push(cloneFunctionCov(functionCov));
    }
    return {
        scriptId: scriptCov.scriptId,
        url: scriptCov.url,
        functions,
    };
}
exports.cloneScriptCov = cloneScriptCov;
/**
 * Creates a deep copy of a function coverage.
 *
 * @param functionCov Function coverage to clone.
 * @return Cloned function coverage.
 */
function cloneFunctionCov(functionCov) {
    const ranges = [];
    for (const rangeCov of functionCov.ranges) {
        ranges.push(cloneRangeCov(rangeCov));
    }
    return {
        functionName: functionCov.functionName,
        ranges,
        isBlockCoverage: functionCov.isBlockCoverage,
    };
}
exports.cloneFunctionCov = cloneFunctionCov;
/**
 * Creates a deep copy of a function coverage.
 *
 * @param rangeCov Range coverage to clone.
 * @return Cloned range coverage.
 */
function cloneRangeCov(rangeCov) {
    return {
        startOffset: rangeCov.startOffset,
        endOffset: rangeCov.endOffset,
        count: rangeCov.count,
    };
}
exports.cloneRangeCov = cloneRangeCov;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9zcmMvY2xvbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTs7Ozs7R0FLRztBQUNILHlCQUFnQyxVQUFnQztJQUM5RCxNQUFNLE1BQU0sR0FBZ0IsRUFBRSxDQUFDO0lBQy9CLEtBQUssTUFBTSxTQUFTLElBQUksVUFBVSxDQUFDLE1BQU0sRUFBRTtRQUN6QyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0tBQ3hDO0lBRUQsT0FBTztRQUNMLE1BQU07S0FDUCxDQUFDO0FBQ0osQ0FBQztBQVRELDBDQVNDO0FBRUQ7Ozs7O0dBS0c7QUFDSCx3QkFBK0IsU0FBOEI7SUFDM0QsTUFBTSxTQUFTLEdBQWtCLEVBQUUsQ0FBQztJQUNwQyxLQUFLLE1BQU0sV0FBVyxJQUFJLFNBQVMsQ0FBQyxTQUFTLEVBQUU7UUFDN0MsU0FBUyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0tBQy9DO0lBRUQsT0FBTztRQUNMLFFBQVEsRUFBRSxTQUFTLENBQUMsUUFBUTtRQUM1QixHQUFHLEVBQUUsU0FBUyxDQUFDLEdBQUc7UUFDbEIsU0FBUztLQUNWLENBQUM7QUFDSixDQUFDO0FBWEQsd0NBV0M7QUFFRDs7Ozs7R0FLRztBQUNILDBCQUFpQyxXQUFrQztJQUNqRSxNQUFNLE1BQU0sR0FBZSxFQUFFLENBQUM7SUFDOUIsS0FBSyxNQUFNLFFBQVEsSUFBSSxXQUFXLENBQUMsTUFBTSxFQUFFO1FBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7S0FDdEM7SUFFRCxPQUFPO1FBQ0wsWUFBWSxFQUFFLFdBQVcsQ0FBQyxZQUFZO1FBQ3RDLE1BQU07UUFDTixlQUFlLEVBQUUsV0FBVyxDQUFDLGVBQWU7S0FDN0MsQ0FBQztBQUNKLENBQUM7QUFYRCw0Q0FXQztBQUVEOzs7OztHQUtHO0FBQ0gsdUJBQThCLFFBQTRCO0lBQ3hELE9BQU87UUFDTCxXQUFXLEVBQUUsUUFBUSxDQUFDLFdBQVc7UUFDakMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxTQUFTO1FBQzdCLEtBQUssRUFBRSxRQUFRLENBQUMsS0FBSztLQUN0QixDQUFDO0FBQ0osQ0FBQztBQU5ELHNDQU1DIiwiZmlsZSI6ImNsb25lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnVuY3Rpb25Db3YsIFByb2Nlc3NDb3YsIFJhbmdlQ292LCBTY3JpcHRDb3YgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBkZWVwIGNvcHkgb2YgYSBwcm9jZXNzIGNvdmVyYWdlLlxuICpcbiAqIEBwYXJhbSBwcm9jZXNzQ292IFByb2Nlc3MgY292ZXJhZ2UgdG8gY2xvbmUuXG4gKiBAcmV0dXJuIENsb25lZCBwcm9jZXNzIGNvdmVyYWdlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xvbmVQcm9jZXNzQ292KHByb2Nlc3NDb3Y6IFJlYWRvbmx5PFByb2Nlc3NDb3Y+KTogUHJvY2Vzc0NvdiB7XG4gIGNvbnN0IHJlc3VsdDogU2NyaXB0Q292W10gPSBbXTtcbiAgZm9yIChjb25zdCBzY3JpcHRDb3Ygb2YgcHJvY2Vzc0Nvdi5yZXN1bHQpIHtcbiAgICByZXN1bHQucHVzaChjbG9uZVNjcmlwdENvdihzY3JpcHRDb3YpKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmVzdWx0LFxuICB9O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBkZWVwIGNvcHkgb2YgYSBzY3JpcHQgY292ZXJhZ2UuXG4gKlxuICogQHBhcmFtIHNjcmlwdENvdiBTY3JpcHQgY292ZXJhZ2UgdG8gY2xvbmUuXG4gKiBAcmV0dXJuIENsb25lZCBzY3JpcHQgY292ZXJhZ2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZVNjcmlwdENvdihzY3JpcHRDb3Y6IFJlYWRvbmx5PFNjcmlwdENvdj4pOiBTY3JpcHRDb3Yge1xuICBjb25zdCBmdW5jdGlvbnM6IEZ1bmN0aW9uQ292W10gPSBbXTtcbiAgZm9yIChjb25zdCBmdW5jdGlvbkNvdiBvZiBzY3JpcHRDb3YuZnVuY3Rpb25zKSB7XG4gICAgZnVuY3Rpb25zLnB1c2goY2xvbmVGdW5jdGlvbkNvdihmdW5jdGlvbkNvdikpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzY3JpcHRJZDogc2NyaXB0Q292LnNjcmlwdElkLFxuICAgIHVybDogc2NyaXB0Q292LnVybCxcbiAgICBmdW5jdGlvbnMsXG4gIH07XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGRlZXAgY29weSBvZiBhIGZ1bmN0aW9uIGNvdmVyYWdlLlxuICpcbiAqIEBwYXJhbSBmdW5jdGlvbkNvdiBGdW5jdGlvbiBjb3ZlcmFnZSB0byBjbG9uZS5cbiAqIEByZXR1cm4gQ2xvbmVkIGZ1bmN0aW9uIGNvdmVyYWdlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xvbmVGdW5jdGlvbkNvdihmdW5jdGlvbkNvdjogUmVhZG9ubHk8RnVuY3Rpb25Db3Y+KTogRnVuY3Rpb25Db3Yge1xuICBjb25zdCByYW5nZXM6IFJhbmdlQ292W10gPSBbXTtcbiAgZm9yIChjb25zdCByYW5nZUNvdiBvZiBmdW5jdGlvbkNvdi5yYW5nZXMpIHtcbiAgICByYW5nZXMucHVzaChjbG9uZVJhbmdlQ292KHJhbmdlQ292KSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGZ1bmN0aW9uTmFtZTogZnVuY3Rpb25Db3YuZnVuY3Rpb25OYW1lLFxuICAgIHJhbmdlcyxcbiAgICBpc0Jsb2NrQ292ZXJhZ2U6IGZ1bmN0aW9uQ292LmlzQmxvY2tDb3ZlcmFnZSxcbiAgfTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgZGVlcCBjb3B5IG9mIGEgZnVuY3Rpb24gY292ZXJhZ2UuXG4gKlxuICogQHBhcmFtIHJhbmdlQ292IFJhbmdlIGNvdmVyYWdlIHRvIGNsb25lLlxuICogQHJldHVybiBDbG9uZWQgcmFuZ2UgY292ZXJhZ2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZVJhbmdlQ292KHJhbmdlQ292OiBSZWFkb25seTxSYW5nZUNvdj4pOiBSYW5nZUNvdiB7XG4gIHJldHVybiB7XG4gICAgc3RhcnRPZmZzZXQ6IHJhbmdlQ292LnN0YXJ0T2Zmc2V0LFxuICAgIGVuZE9mZnNldDogcmFuZ2VDb3YuZW5kT2Zmc2V0LFxuICAgIGNvdW50OiByYW5nZUNvdi5jb3VudCxcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
