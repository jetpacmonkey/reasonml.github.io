webpackJsonp([27],{"./node_modules/json-loader/index.js!./.cache/json/guide-language-overview.json":function(e,t){e.exports={data:{allFile:{edges:[{node:{relativePath:"guide/examples.md",childMarkdownRemark:{frontmatter:{title:"Examples",order:60}}}},{node:{relativePath:"guide/what-and-why.md",childMarkdownRemark:{frontmatter:{title:"What & Why",order:0}}}},{node:{relativePath:"guide/index.md",childMarkdownRemark:{frontmatter:{title:"The Reason Guide",order:0}}}},{node:{relativePath:"guide/ocaml.md",childMarkdownRemark:{frontmatter:{title:"Comparison to OCaml",order:50}}}},{node:{relativePath:"guide/javascript/converting.md",childMarkdownRemark:{frontmatter:{title:"Converting from JS",order:5}}}},{node:{relativePath:"guide/javascript/libraries.md",childMarkdownRemark:{frontmatter:{title:"Libraries",order:2}}}},{node:{relativePath:"guide/javascript/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}},{node:{relativePath:"guide/editor-tools/editors-plugins.md",childMarkdownRemark:{frontmatter:{title:"Editors Plugins",order:20}}}},{node:{relativePath:"guide/javascript/interop.md",childMarkdownRemark:{frontmatter:{title:"Interop",order:1}}}},{node:{relativePath:"guide/editor-tools/global-installation.md",childMarkdownRemark:{frontmatter:{title:"Global Installation",order:10}}}},{node:{relativePath:"guide/editor-tools/index.md",childMarkdownRemark:{frontmatter:{title:"Editor Setup",order:10}}}},{node:{relativePath:"guide/language/boolean.md",childMarkdownRemark:{frontmatter:{title:"Boolean",order:30}}}},{node:{relativePath:"guide/javascript/index.md",childMarkdownRemark:{frontmatter:{title:"JavaScript",order:30}}}},{node:{relativePath:"guide/javascript/syntax-cheatsheet.md",childMarkdownRemark:{frontmatter:{title:"Syntax Cheatsheet",order:1}}}},{node:{relativePath:"guide/language/destructuring.md",childMarkdownRemark:{frontmatter:{title:"Destructuring",order:130}}}},{node:{relativePath:"guide/language/exception.md",childMarkdownRemark:{frontmatter:{title:"Exception",order:175}}}},{node:{relativePath:"guide/editor-tools/extra-goodies.md",childMarkdownRemark:{frontmatter:{title:"Extra Goodies",order:30}}}},{node:{relativePath:"guide/language/external.md",childMarkdownRemark:{frontmatter:{title:"External",order:170}}}},{node:{relativePath:"guide/language/function.md",childMarkdownRemark:{frontmatter:{title:"Function",order:100}}}},{node:{relativePath:"guide/language/integer-and-float.md",childMarkdownRemark:{frontmatter:{title:"Integer & Float",order:40}}}},{node:{relativePath:"guide/language/imperative-loops.md",childMarkdownRemark:{frontmatter:{title:"Imperative Loops",order:150}}}},{node:{relativePath:"guide/language/if-else.md",childMarkdownRemark:{frontmatter:{title:"If-Else",order:110}}}},{node:{relativePath:"guide/language/index.md",childMarkdownRemark:{frontmatter:{title:"Language basics",order:20}}}},{node:{relativePath:"guide/language/module.md",childMarkdownRemark:{frontmatter:{title:"Module",order:180}}}},{node:{relativePath:"guide/language/jsx.md",childMarkdownRemark:{frontmatter:{title:"JSX",order:160}}}},{node:{relativePath:"guide/language/let-binding.md",childMarkdownRemark:{frontmatter:{title:"Let Binding",order:10}}}},{node:{relativePath:"guide/language/list-and-array.md",childMarkdownRemark:{frontmatter:{title:"List & Array",order:80}}}},{node:{relativePath:"guide/language/more-on-type.md",childMarkdownRemark:{frontmatter:{title:"More on Type",order:120}}}},{node:{relativePath:"guide/language/mutation.md",childMarkdownRemark:{frontmatter:{title:"Mutation",order:140}}}},{node:{relativePath:"guide/language/object.md",childMarkdownRemark:{frontmatter:{title:"Object",order:175}}}},{node:{relativePath:"guide/language/overview.md",childMarkdownRemark:{frontmatter:{title:"Overview",order:0}}}},{node:{relativePath:"guide/language/pattern-matching.md",childMarkdownRemark:{frontmatter:{title:"Pattern Matching!",order:135}}}},{node:{relativePath:"guide/language/record.md",childMarkdownRemark:{frontmatter:{title:"Record",order:60}}}},{node:{relativePath:"guide/language/string-and-char.md",childMarkdownRemark:{frontmatter:{title:"String & Char",order:20}}}},{node:{relativePath:"guide/language/tuple.md",childMarkdownRemark:{frontmatter:{title:"Tuple",order:50}}}},{node:{relativePath:"guide/language/type.md",childMarkdownRemark:{frontmatter:{title:"Type!",order:15}}}},{node:{relativePath:"guide/meta/index.md",childMarkdownRemark:{frontmatter:{title:"Meta",order:1e3}}}},{node:{relativePath:"guide/native/convert-from-ocaml.md",childMarkdownRemark:{frontmatter:{title:"Converting from OCaml",order:4}}}},{node:{relativePath:"guide/language/variant.md",childMarkdownRemark:{frontmatter:{title:"Variant!",order:70}}}},{node:{relativePath:"guide/meta/project-structure.md",childMarkdownRemark:{frontmatter:{title:"Project Structure",order:0}}}},{node:{relativePath:"guide/native/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}},{node:{relativePath:"guide/native/index.md",childMarkdownRemark:{frontmatter:{title:"Native",order:40}}}}]},file:{relativePath:"guide/language/overview.md",childMarkdownRemark:{html:'<table>\n<thead>\n<tr>\n<th>Primitive</th>\n<th>Example</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Strings</td>\n<td><code>"Hello"</code></td>\n</tr>\n<tr>\n<td>Characters</td>\n<td><code>\'x\'</code></td>\n</tr>\n<tr>\n<td>Integers</td>\n<td><code>23</code>\n, \n<code>-23</code></td>\n</tr>\n<tr>\n<td>Floats</td>\n<td><code>23.0</code>\n, \n<code>-23.0</code></td>\n</tr>\n<tr>\n<td>Integer Addition</td>\n<td><code>23 + 1</code></td>\n</tr>\n<tr>\n<td>Float Addition</td>\n<td><code>23.0 +. 1.0</code></td>\n</tr>\n<tr>\n<td>Integer Division/Multiplication</td>\n<td><code>2 / 23 * 1</code></td>\n</tr>\n<tr>\n<td>Float Division/Multiplication</td>\n<td><code>2.0 /. 23.0 *. 1.0</code></td>\n</tr>\n<tr>\n<td>String Concatenation</td>\n<td><code>"Hello " ++ "World"</code></td>\n</tr>\n<tr>\n<td>Comparison</td>\n<td><code>></code>\n, \n<code>&#x3C;</code>\n, \n<code>>=</code>\n, \n<code>=&#x3C;</code></td>\n</tr>\n<tr>\n<td>Boolean operations</td>\n<td><code>!</code>\n, \n<code>&#x26;&#x26;</code>\n, \n<code>||</code></td>\n</tr>\n<tr>\n<td>Reference, Physical (deep) Equality</td>\n<td><code>===</code>\n, \n<code>==</code></td>\n</tr>\n<tr>\n<td>Immutable Lists</td>\n<td><code>[1, 2, 3]</code></td>\n</tr>\n<tr>\n<td>Immutable Prepend</td>\n<td><code>[item1, item2, ...theRest]</code></td>\n</tr>\n<tr>\n<td>Arrays</td>\n<td><code>[|1, 2, 3|]</code></td>\n</tr>\n<tr>\n<td>Records</td>\n<td><code>type player = {score: int}; {score: 100}</code></td>\n</tr>\n</tbody>\n</table>',frontmatter:{title:"Overview"}}}},pathContext:{section:"guide",sectionTitle:"Guide",relativePath:"guide/language/overview.md",relatedFiles:"/^guide\\/.*\\.md$/"}}}});
//# sourceMappingURL=path---guide-language-overview-09959f82337d3ad391ad.js.map